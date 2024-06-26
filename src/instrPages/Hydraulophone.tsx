import React from 'react';
import { Link } from 'react-router-dom';
import hydrophoneImg1 from '../assets/instruments/Hydraulophone/hydra1.png';
import hydrophoneImg2 from '../assets/instruments/Hydraulophone/hydra2.avif';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Hydraulophone: React.FC = () => {
  const videoUrl = "https://www.youtube.com/embed/tgU0OZkGhGI";

  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      <div className='instrument-content'>
        <div className='desc-text-block'>
          <h1>Гідравлофон: Музичний інструмент, що використовує воду</h1>
          <p>
            Гідравлофон - це музичний інструмент, який використовує воду як основний засіб для генерації та поширення звуку. Гідравлофони бувають різних конструкцій, але загалом вони працюють за принципом взаємодії води з акустичними коливаннями.
          </p>

          <h2>Принцип дії Гідравлофона</h2>
          <p>
            Гідравлофон складається з резонатора, заповненого водою, і механізму для генерації звуку, який передає вібрації воді. Ці вібрації можуть створюватися різними способами, наприклад:
          </p>
          <ul>
            <li>Механічні коливання: Використання вібруючих тіл, таких як мембрани або спеціальні молоточки, які ударяють по воді або передають коливання через резонатор.</li>
            <li>Електромагнітні коливання: Використання електромагнітних перетворювачів, які генерують коливання у воді.</li>
            <li>Повітряні хвилі: В деяких конструкціях звук може створюватися повітряними хвилями, що передаються у воду.</li>
          </ul>

          <h2>Поширення звуку в Гідравлофоні</h2>
          <p>
            Звук у воді поширюється за рахунок щільності та властивостей самої рідини. Вода має високу щільність у порівнянні з повітрям, що дозволяє звуковим хвилям передаватися швидше і з меншою втратою енергії.
          </p>

          <h2>Діапазон звучання Гідравлофона</h2>
          <p>
            Діапазон звучання Гідравлофона залежить від багатьох факторів, таких як розмір і форма резонатора, об’єм води та матеріали, з яких зроблений інструмент. Зазвичай Гідравлофони мають широкий діапазон частот, який може включати як низькі, так і високі <Link to='/glossary/Тони' className='link-gloss'>тони</Link>.
          </p>

          <h2>Використання Гідравлофона</h2>
          <p>
            Гідравлофон як музичний інструмент часто використовується для створення специфічних звукових ефектів і експериментальної музики, де унікальні властивості води додають глибину і неповторність звуковому виконанню.
          </p>
        </div>
        <div className='media-content'>
          <img src={hydrophoneImg1} alt='Hydrophone' />
          <img src={hydrophoneImg2} alt='Hydrophone' />
        </div>
      </div>
      <div className='videoContent'>
        <h2>Як працює Гідравлофон</h2>
        <iframe 
          src={videoUrl} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default Hydraulophone;
