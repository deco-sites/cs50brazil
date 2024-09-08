
import { useState } from 'preact/hooks';

export default function CoursePage() {
  const topics = [
    'Scratch',
    'C',
    'Arrays',
    'Algorithms',
    'Memory',
    'Data Structures',
    'Python',
    'Artificial Intelligence',
    'SQL',
    'HTML, CSS, JavaScript',
    'Flask',
    'Cybersecurity',
  ];

  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [activeTab, setActiveTab] = useState('conteudo');

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 lg:p-10">
        {/* Título "CS50x Course" */}
        <div className="flex items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">CS50x Course</h2>
        </div>

        {/* Filtros por Weeks (Semanas) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {topics.map((topic) => (
            <button
              key={topic}
              className={`px-4 py-2 text-sm text-gray-900 rounded-full border border-gray-300 bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 focus:outline-none active:scale-95 ${
                activeTopic === topic ? 'bg-gray-200 shadow-md' : ''
              }`}
              style={{
                fontWeight: '500',
                fontFamily: 'Helvetica Neue, sans-serif',
              }}
              onClick={() => setActiveTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Abas para Conteúdo e Atividades */}
        <div className="border-b border-gray-300 mb-8">
          <nav className="flex space-x-8">
            <button
              className={`text-2xl font-semibold pb-2 transition-colors duration-300 ${
                activeTab === 'conteudo'
                  ? 'text-gray-900 border-b-4 border-blue-500'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('conteudo')}
            >
              Conteúdo
            </button>
            <button
              className={`text-2xl font-semibold pb-2 transition-colors duration-300 ${
                activeTab === 'atividades'
                  ? 'text-gray-900 border-b-4 border-blue-500'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('atividades')}
            >
              Atividades
            </button>
          </nav>
        </div>

        {/* Conteúdo das Abas baseado no Tópico Selecionado */}
        <div>
          {activeTab === 'conteudo' ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Conteúdo de {activeTopic}
              </h3>
              <p className="mt-4 text-gray-700">
                Aqui está o conteúdo relacionado ao tópico {activeTopic}. Você pode adicionar detalhes específicos para este tópico aqui.
              </p>
              {/* Vídeo embutido no conteúdo */}
              <div className="mt-8">
                <iframe
                  className="w-full max-w-4xl h-64 md:h-96 rounded-lg shadow-lg"
                  src="https://www.youtube-nocookie.com/embed/3LPJfIKxwWc?si=oPrz8R8jMEtoCOab&cc_lang_pref=pt&cc_load_policy=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Atividades de {activeTopic}
              </h3>
              <p className="mt-4 text-gray-700">
                Aqui estão as atividades relacionadas ao tópico {activeTopic}. Você pode adicionar atividades, exercícios, quizzes, etc.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
