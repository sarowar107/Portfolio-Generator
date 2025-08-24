import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { downloadPortfolio } from '@/utils/portfolioGenerator';
import TemplateA from '@/templates/TemplateA';
import TemplateB from '@/templates/TemplateB';
import TemplateC from '@/templates/TemplateC';
import TemplateD from '@/templates/TemplateD';
import TemplateE from '@/templates/TemplateE';
import TemplateF from '@/templates/TemplateF';
import TemplateG from '@/templates/TemplateG';
import TemplateH from '@/templates/TemplateH';
import TemplateI from '@/templates/TemplateI';
import TemplateJ from '@/templates/TemplateJ';
import TemplateK from '@/templates/TemplateK';
import TemplateL from '@/templates/TemplateL';
import { dummyData } from '@/data/dummyData';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Download, Edit } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const templateComponents = {
  'minimalist-pro': TemplateA,
  'creative-showcase': TemplateB,
  'cyberpunk-neon': TemplateC,
  'classic-editorial': TemplateD,
  'brutalist-block': TemplateE,
  'soft-friendly': TemplateF,
  'corporate-executive': TemplateG,
  'gradient-fusion': TemplateH,
  'monochrome-accent': TemplateI,
  'earthy-organic': TemplateJ,
  'retro-arcade': TemplateK,
  'gilded-onyx': TemplateL,
};

const Preview = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const formData = location.state?.portfolioData;

  useEffect(() => {
    if (formData && formData.photo && formData.photo.length > 0) {
      const url = URL.createObjectURL(formData.photo[0]);
      setPhotoUrl(url);
      
      // Clean up the object URL when the component unmounts or the data changes
      return () => URL.revokeObjectURL(url);
    }
  }, [formData]);

  const dataToRender = formData 
    ? { ...formData, photoUrl } 
    : dummyData;
    
  const cameFromCustomize = !!formData;

  const SelectedTemplate = templateComponents[templateId];

  useEffect(() => {
    if (!SelectedTemplate) {
      navigate('/');
    }
  }, [SelectedTemplate, navigate]);

  if (!SelectedTemplate) {
    return null; // or a loading/error component
  }

  const handleDownload = async () => {
    if (!formData) {
      toast({
        title: "Error",
        description: "No portfolio data available for download. Please customize a template first.",
        variant: "destructive",
      });
      return;
    }

    setIsDownloading(true);
    try {
      await downloadPortfolio(templateId, dataToRender);
      toast({
        title: "Success!",
        description: "Your portfolio has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating your portfolio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-background">
      <div className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate(cameFromCustomize ? -1 : '/')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {cameFromCustomize ? 'Back to Editor' : 'Back to Templates'}
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-textSecondary hidden sm:inline">
                Previewing: <span className="font-semibold text-text">{templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
              </span>
              {cameFromCustomize ? (
                 <Button onClick={handleDownload} disabled={isDownloading}>
                    <Download className="mr-2 h-4 w-4" />
                    {isDownloading ? 'Generating...' : 'Download Portfolio'}
                 </Button>
              ) : (
                <Button asChild>
                  <Link to={`/customize/${templateId}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Select & Customize
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <SelectedTemplate portfolioData={dataToRender} />
    </div>
  );
};

export default Preview;
