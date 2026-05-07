const LivrableWireframe = () => {
  return (
    <div className="dashboard-mockup">

  <div className="dashboard-label">
    FORMAT-TYPE — FLASH MENSUEL
  </div>

  <div className="dashboard-header">

    <div className="header-left">
      <div className="line dark w-70 h-12"></div>
      <div className="line w-40"></div>
    </div>

    <div className="header-right">
      <div className="line w-30"></div>
      <div className="line blue w-50"></div>
    </div>

  </div>

  <div className="stats-grid">

    <div className="stat-card">
      <div className="line w-60"></div>
      <div className="line dark h-18"></div>
      <div className="line green w-30 h-6"></div>
    </div>

    <div className="stat-card">
      <div className="line w-60"></div>
      <div className="line dark h-18"></div>
      <div className="line green w-30 h-6"></div>
    </div>

    <div className="stat-card">
      <div className="line w-60"></div>
      <div className="line dark h-18"></div>
      <div className="line blue w-30 h-6"></div>
    </div>

    <div className="stat-card">
      <div className="line w-60"></div>
      <div className="line dark h-18"></div>
      <div className="line red w-30 h-6"></div>
    </div>

  </div>

  <div className="chart-section">

    <div className="line w-40 mb-12"></div>

    <div className="chart-container">

      <svg viewBox="0 0 500 120" preserveAspectRatio="none">

        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2F80ED" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2F80ED" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0,95 
          L40,88 
          L80,90 
          L120,74 
          L160,76 
          L200,60 
          L240,63 
          L280,48 
          L320,52 
          L360,35 
          L400,38 
          L440,22 
          L500,12 
          L500,120 
          L0,120 Z"
          fill="url(#chartGradient)"
        />

        <path
          d="M0,95 
          L40,88 
          L80,90 
          L120,74 
          L160,76 
          L200,60 
          L240,63 
          L280,48 
          L320,52 
          L360,35 
          L400,38 
          L440,22 
          L500,12"
          fill="none"
          stroke="#2F80ED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </svg>

    </div>

  </div>

  <div className="bottom-lines">
    <div className="line w-80"></div>
    <div className="line w-60"></div>
  </div>

</div>
  );
};

export default LivrableWireframe;