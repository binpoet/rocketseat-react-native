const ExperienceBar = () => {
  return (
    <header className='experience-bar'>
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }} />
        <span className='current-experience' style={{ left: '60%' }}>
          {' '}
          350 xp
        </span>
      </div>
      <span>666 xp</span>
    </header>
  );
};

export default ExperienceBar;
