type BrandIconProps = {
  size?: number;
  className?: string;
};

export function GitHubIcon({ size = 18, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M5.37 7.98H1.76V22h3.61V7.98ZM5.61 3.73A2.12 2.12 0 1 0 1.38 3.7a2.12 2.12 0 0 0 4.23.03ZM22.62 13.96c0-4.23-2.26-6.2-5.27-6.2-2.43 0-3.52 1.34-4.13 2.28V7.98H9.61V22h3.61v-6.95c0-1.83.35-3.61 2.63-3.61 2.25 0 2.28 2.11 2.28 3.73V22h3.61v-7.72l.88-.32Z" />
    </svg>
  );
}
