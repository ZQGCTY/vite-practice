import { gamesData } from './GameData'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        おすすめゲーム一覧
      </h1>

      {/* ゲームカードのグリッド表示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gamesData.map((game) => (
          <div
            key={game.id}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* ゲーム画像 */}
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-48 object-cover"
            />

            {/* ゲーム情報 */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold bg-indigo-600 text-indigo-100 px-2 py-1 rounded">
                  {game.genre}
                </span>
                <span className="text-yellow-400 font-bold text-sm">
                  ★ {game.rating}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2 text-slate-100">
                {game.title}
              </h2>

              <p className="text-slate-400 text-sm flex-grow">
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App