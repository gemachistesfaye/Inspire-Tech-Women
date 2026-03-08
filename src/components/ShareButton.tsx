import { Share2, Twitter, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  name: string;
  url?: string;
}

const ShareButton = ({ name, url }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const shareUrl = url || window.location.href;
  const shareText = `Check out ${name}'s inspiring story on Women in Tech!`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:text-primary"
        aria-label="Share"
      >
        <Share2 size={18} />
      </button>

      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 font-body text-sm text-foreground transition-colors hover:bg-secondary/50"
              onClick={() => setShowMenu(false)}
            >
              <Twitter size={16} className="text-muted-foreground" />
              Share on Twitter
            </a>
            <button
              onClick={() => {
                handleCopy();
                setShowMenu(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-3 font-body text-sm text-foreground transition-colors hover:bg-secondary/50"
            >
              {copied ? (
                <Check size={16} className="text-primary" />
              ) : (
                <LinkIcon size={16} className="text-muted-foreground" />
              )}
              {copied ? "Link Copied!" : "Copy Link"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShareButton;
