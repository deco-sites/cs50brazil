interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  videoUrl?: string;
}

export default function Section({
  name = "CS50 by Harvard",
  videoUrl = "https://www.youtube.com/embed/BretE8c90TU?si=LaiK3LtPKBQfWESE&controls=0&autoplay=1&mute=0",
}: Props) {
  return (
    <section className="bg-black text-white py-20 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6 leading-snug">
          
        </h1>
        <p className="text-lg text-gray-400 mb-10">
          Dive into the world of computer science through one of the most prestigious courses, where rigor meets creativity.
        </p>
        <div className="relative mb-12">
          <iframe
            width="720"
            height="400"
            src={`${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="mx-auto rounded-lg shadow-lg border border-gray-700"
          ></iframe>

          <div className="absolute inset-0 border-2 border-gray-600 rounded-lg pointer-events-none"></div>
        </div>
        <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-colors">
          Explore CS50
        </button>
      </div>
    </section>
  );
}
