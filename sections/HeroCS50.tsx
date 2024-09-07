interface Props {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImageUrl?: string;
}

export default function Hero({
  title = "CS50 Brasil",
  subtitle = "A introdução da Universidade de Harvard aos empreendimentos intelectuais da ciência da computação e à arte da programação.",
  buttonText = "Saiba Mais",
  backgroundImageUrl = "",
}: Props) {
  return (
    <section class="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      {backgroundImageUrl && (
        <div
          class="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      )}

      {/* Animated Brazilian colors overlay for the text */}
      <div class="relative z-10 text-center px-6 sm:px-8 lg:px-10 space-y-6 sm:space-y-8">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-300 to-blue-500 animate-spin">
            {title}
          </span>
        </h1>
        <p class="text-base sm:text-lg lg:text-xl font-light text-gray-300 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
          {subtitle}
        </p>
        <a
          href="#register"
          class="inline-block px-6 py-3 bg-white text-black text-sm sm:text-base lg:text-lg font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>

      {/* Footer branding */}
      <div class="absolute bottom-4 text-xs sm:text-sm text-gray-400">
        <a
          href="https://cs50.harvard.edu/x/2023/license/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-gray-300"
        >
          Licenciado pela Universidade de Harvard
        </a>
      </div>

      {/* Floating elements for a clean design touch */}
      <div class="absolute top-5 left-5 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-500 rounded-full opacity-30 blur-2xl"></div>
      <div class="absolute bottom-5 right-5 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>
    </section>
  );
}
