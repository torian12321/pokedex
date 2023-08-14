export interface CardProps {
  id: string;
  open?: boolean;
  onClick?: (id: string) => void;
  onGoNext?: VoidFunction;
  name: string;
  description: string;
  img?: string;
  onInteract?: VoidFunction;
}
