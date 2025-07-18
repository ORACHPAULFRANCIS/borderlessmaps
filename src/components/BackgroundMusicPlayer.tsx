
import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import MusicNotification from "./MusicNotification";

const BackgroundMusicPlayer = () => {
  const {
    isPlaying,
    toggle,
    volume,
    changeVolume,
    showNotification,
    dismissNotification,
  } = useBackgroundMusic();
  
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVolumeChange = (value: number[]) => {
    changeVolume(value[0] / 100);
  };

  return (
    <>
      {/* Music Notification */}
      <MusicNotification
        isVisible={showNotification}
        isPlaying={isPlaying}
        onDismiss={dismissNotification}
        onToggle={toggle}
      />

      {/* Fixed Music Player */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className={`bg-card border border-border rounded-lg shadow-lg transition-all duration-300 ${
          isExpanded ? 'p-4 min-w-64' : 'p-3'
        }`}>
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggle}
              className="p-2 hover:bg-accent"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            {/* Song Info (visible when expanded) */}
            {isExpanded && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Yatzy</div>
                <div className="text-xs text-muted-foreground truncate">
                  Smith & Thell
                </div>
              </div>
            )}

            {/* Volume Control (visible when expanded) */}
            {isExpanded && (
              <div className="flex items-center gap-2 min-w-24">
                <VolumeX className="h-3 w-3 text-muted-foreground" />
                <Slider
                  value={[volume * 100]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <Volume2 className="h-3 w-3 text-muted-foreground" />
              </div>
            )}

            {/* Expand/Collapse Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-accent"
              aria-label={isExpanded ? "Collapse music player" : "Expand music player"}
            >
              <Music className="h-4 w-4" />
            </Button>
          </div>

          {/* Current Status */}
          {!isExpanded && (
            <div className="text-xs text-muted-foreground text-center mt-1">
              {isPlaying ? "Playing" : "Paused"}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BackgroundMusicPlayer;
