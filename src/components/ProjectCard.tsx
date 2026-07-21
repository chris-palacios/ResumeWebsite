import Image from 'next/image';


type ProjectCardProps = {
    link: string;
    picture: string;
    desc: string;
};

export default function ProjectCard(props: ProjectCardProps){
  return (
    <>
      <div className='project-card'>
        <div className='project-picture'>
        <a href={props.link}> 
          <Image 
            src={props.picture}
            width={300}
            height={200}
            alt="Picture of project"
          /> 
        </a>
        </div>
        <div className='project-description'>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}