
import { X, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicNotificationProps {
  isVisible: boolean;
  isPlaying: boolean;
  onDismiss: () => void;
  onToggle: () => void;
}

const MusicNotification = ({ 
  isVisible, 
  isPlaying, 
  onDismiss, 
  onToggle 
}: MusicNotificationProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {isPlaying ? (
              <Volume2 className="h-4 w-4 text-primary" />
            ) : (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="font-medium text-sm">Background Music</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            "9th January" by Black Sherif is now playing. You can control playback using the music player.
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggle}
              className="text-xs"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDismiss}
              className="text-xs"
            >
              Got it
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          className="p-1 h-auto"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default MusicNotification;
