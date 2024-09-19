import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  rectangleContent?: string;
  /**
   * @format rich-text
   */
  arrowContent?: string;
  /**
   * @format rich-text
   */
  ellipseContent?: string;
  rectangleImage?: ImageWidget;
  ellipseImage?: ImageWidget;
  /**
   * @format color-input
   */
  rectangleColor?: string;
  /**
   * @format color-input
   */
  ellipseColor?: string;
  /**
   * @format color-input
   */
  arrowColor?: string;
}

export default function DesignLayout({
  rectangleContent = "Rectangle Content",
  arrowContent = "Arrow Content",
  ellipseContent = "Ellipse Content",
  rectangleImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  ellipseImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  rectangleColor = "#f0f0f0",
  ellipseColor = "#e0e0e0",
  arrowColor = "#000000"
}: Props) {
  return (
    <div class="relative w-full h-screen p-4">
      <div 
        class="absolute rounded-lg shadow-lg overflow-hidden"
        style={{
          left: "30%",
          top: "15%",
          width: "30%",
          height: "40%",
          backgroundColor: rectangleColor
        }}
      >
        <img src={rectangleImage} alt="Rectangle Image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div class="text-center" dangerouslySetInnerHTML={{ __html: rectangleContent }} />
        </div>
      </div>

      <div 
        class="absolute"
        style={{
          left: "52%",
          top: "46%",
          width: "14%",
          height: "1px",
          backgroundColor: arrowColor,
          transform: "rotate(0deg)"
        }}
      >
        <div class="absolute right-0 top-1/2 transform translate-y-[-50%] -translate-x-2">
          <div style={{ 
            width: "0",
            height: "0",
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: `10px solid ${arrowColor}`
          }} />
        </div>
        <div class="absolute top-[-20px] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span dangerouslySetInnerHTML={{ __html: arrowContent }} />
        </div>
      </div>

      <div 
        class="absolute rounded-full shadow-lg overflow-hidden"
        style={{
          left: "66%",
          top: "23%",
          width: "11%",
          height: "30%",
          backgroundColor: ellipseColor
        }}
      >
        <img src={ellipseImage} alt="Ellipse Image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center p-4">
          <div class="text-center" dangerouslySetInnerHTML={{ __html: ellipseContent }} />
        </div>
      </div>
    </div>
  );
}