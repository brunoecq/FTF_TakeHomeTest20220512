import List from './components/List'

function App() {
  return (
    <div className="grid place-items-center h-screen containter">
      <List />
      <div className='m-4 fixed top-0 left-0'>
        <div className="mt-4 -mb-3"><div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"><div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style={{backgroundPositionY: 10, backgroundPositionX: 10}}></div><div className="relative rounded-xl overflow-auto p-8">
          <div className="flex flex-col sm:flex-column gap-8">
            <div className="relative">
              <p className="font-medium text-sm text-slate-500 font-mono mb-3 ml-8 dark:text-slate-400">FrontEnd</p>
              <ul className="list-disc list-inside text-slate-700 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 p-4 pl-8 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400">
                <li>React</li>
                <li>Redux-Saga</li>
                <li>Typescript</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div className="relative">
              <p className="font-medium text-sm text-slate-500 font-mono mb-3 ml-8 dark:text-slate-400">Backend</p>
              <ul className="list-disc list-outside text-slate-700 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 p-4 pl-8 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-400">
                <li>NestJS</li>
                <li>Typescript</li>
                <li>Method: GET http://localhost:4000/commits</li>
              </ul>
            </div>
          </div>
        </div><div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
