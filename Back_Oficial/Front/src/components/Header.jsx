// components/Header.jsx
import React from 'react';

const Header = ({ title, onSearch, onMenuToggle }) => {
  void onSearch;

  return (
    <header className="bg-white shadow-sm z-10 sticky top-0">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            <i data-lucide="menu"></i>
          </button>
          <h1 className="text-xl font-bold text-[#6b2132]">{title}</h1>
        </div>

        {/* <div className="relative w-full max-w-2xl mx-4 group">
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#6b2132] transition-all shadow-inner">
            <i data-lucide="search" className="text-gray-500 w-5 h-5"></i>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar en todos los cursos..."
              className="bg-transparent border-none outline-none w-full ml-3 text-sm"
              onFocus={() => setIsSearchPanelOpen(true)}
            />
            <button
              className="p-1 hover:bg-gray-200 rounded text-gray-500"
              onClick={() => setIsSearchPanelOpen(true)}
            >
              <i data-lucide="sliders-horizontal" className="w-4 h-4"></i>
            </button>
          </div> 

          {isSearchPanelOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg border border-t-0 border-gray-200 p-4 mt-0 fade-in z-50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Curso</label>
                  <select className="w-full mt-1 p-2 bg-gray-50 border rounded text-sm">
                    <option>Todos</option>
                    <option>Compiladores</option>
                    <option>Sistemas Operativos</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Tipo Archivo</label>
                  <select className="w-full mt-1 p-2 bg-gray-50 border rounded text-sm">
                    <option>Cualquiera</option>
                    <option>PDF Document</option>
                    <option>Presentación (PPTX)</option>
                    <option>Código (.c, .java)</option>
                    <option>Ejecutable (.exe)</option>
                    <option>Drive Folder</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Ordenar por</label>
                  <select className="w-full mt-1 p-2 bg-gray-50 border rounded text-sm">
                    <option>Relevancia</option>
                    <option>Fecha (Reciente)</option>
                    <option>Nombre (A-Z)</option>
                    <option>Tamaño</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Fecha</label>
                  <select className="w-full mt-1 p-2 bg-gray-50 border rounded text-sm">
                    <option>Cualquier fecha</option>
                    <option>Última semana</option>
                    <option>Último mes</option>
                    <option>Último año</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsSearchPanelOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 text-sm bg-[#6b2132] text-white rounded hover:bg-opacity-90"
                >
                  Buscar
                </button>
              </div>
            </div>
          )}
        </div>*/}

        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full" title="Ayuda">
            <i data-lucide="help-circle"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
