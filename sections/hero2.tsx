import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format color-input
   */
  circleColor?: string;
  /**
   * @format rich-text
   */
  text?: string;
}

export default function CS50Circle({
  circleColor = "#4A90E2",
  text = "This is CS50"
}: Props) {
  return (
    <div class="relative w-72 h-72">
      <div 
        class="absolute inset-0 rounded-full"
        style={{ backgroundColor: circleColor }}
      ></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 
          class="text-white text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: text }}
        ></h2>
      </div>
    </div>
  );
}