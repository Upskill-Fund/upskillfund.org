import React from 'react';
import firstImg from '../../images/women-career.jpeg';
import img from '../../images/men-career.jpeg';
import AnimationSection from './AnimationSection';
function Home() {
  const [animationComplete, setAnimationComplete] = React.useState(false);
  const [counter, setCounter] = React.useState(1);
  //let complete = false;
  React.useEffect(() => {
    console.log('inside use effect');
    setTimeout(handleAnimation, 2000);
  });
  const handleAnimation = () => {
    console.log('hello');
    if (counter > 4) {
      setAnimationComplete(true);
      console.log('counter', counter);
    } else if (counter <= 4) {
      console.log('counter', counter);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  console.log('animation', animationComplete);
  return (
    <>
      <section className="content-section first content-cover">
        <div className="container-fluid frame">
          <AnimationSection
            animationComplete={animationComplete}
            counter={counter}
          />
        </div>
      </section>
      <section className="content-section">
        <img alt="women-career" src={firstImg} className="cover-img" />
      </section>
    </>
  );
}

export default Home;
