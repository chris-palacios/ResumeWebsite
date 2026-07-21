import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
    <div className="name-title">
        <h1>Hi I'm Christian</h1>
      </div>
      <div className='profile-pic'>
        <img src={"/profile-pic.jpg"}/>
      </div>
      <div className='profile-bio'>
        <h2>I'm a software developer looking for his first gig. Please hire me.</h2>
      </div>
      <div className='projects'>
        <div className='row'>
          <ProjectCard link="https://github.com/chris-palacios/brokenlink" picture={'/maple-leafs.jpg'} desc='Sports Sentiment Evaluator'></ProjectCard>
          <ProjectCard link="https://github.com/chris-palacios" picture={'/news.jpg'} desc='News Website'></ProjectCard>
        </div>  
        <div className='row'>
          <ProjectCard link="https://github.com/chris-palacios" picture={'/bingoal.jpg'} desc='Habit Tracking'></ProjectCard>
          <ProjectCard link="https://github.com/chris-palacios" picture={'/CI-CD.jpg'} desc='Portfolio Webserver CI/CD'></ProjectCard>
        </div>
      </div>
    </>
  );

  
}
