import React, { useState, useEffect } from 'react';
import Card from '../../../component/Card';
import reactImage from '/static/home/skills/reactImage.png';
import djangoImage from '/static/home/skills/djangoImage.png';
import mysqlImage from '/static/home/skills/mysqlImage.png';
import djangoRestImage from '/static/home/skills/djangoRestImage.png';
import pythonImage from '/static/home/skills/pythonImage.png';
import background3 from '/static/home/background3.jpg';

const Skills = () => {
  const reactDescription = 'Hands-on experience with React,<br/>Proficient in creating reusable components, managing state efficiently using hooks and routing.';
  const pythonDescription = 'Proficient in Python programming,<br/>Experience with data structures, algorithms, and web development.';
  const djangoRestDescription = 'Knowledgeable in Django REST Framework,<br/>Skilled in building and consuming RESTful APIs with authentication.';
  const djangoDescription = 'Hands-on experience with Django and its ORM,<br/>Skilled in building scalable web applications and RESTful APIs.';
  const mysqlDescription = 'Experienced in MySQL database management,<br/>Proficient in writing complex queries and optimizing performance.';
  const reactNativeDescription = 'Familiar with React Native,<br/>Able to build cross-platform mobile applications using React components.';

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Create image elements to track their loading
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    const img6 = new Image();
    const background = new Image();

    // Set the sources
    img1.src = reactImage;
    img2.src = djangoImage;
    img3.src = mysqlImage;
    img4.src = djangoRestImage;
    img5.src = pythonImage;
    img6.src = reactImage; // For React Native
    background.src = background3;

    // Function to check if all images are loaded
    const handleImagesLoaded = () => {
      if (
        img1.complete && 
        img2.complete && 
        img3.complete && 
        img4.complete && 
        img5.complete && 
        img6.complete &&
        background.complete
      ) {
        setImagesLoaded(true);
      }
    };

    // Add event listeners to each image
    img1.onload = handleImagesLoaded;
    img2.onload = handleImagesLoaded;
    img3.onload = handleImagesLoaded;
    img4.onload = handleImagesLoaded;
    img5.onload = handleImagesLoaded;
    img6.onload = handleImagesLoaded;
    background.onload = handleImagesLoaded;

    // In case images are cached and load instantly
    handleImagesLoaded();

    return () => {
      // Clean up event listeners
      img1.onload = null;
      img2.onload = null;
      img3.onload = null;
      img4.onload = null;
      img5.onload = null;
      img6.onload = null;
      background.onload = null;
    };
  }, []);

  // Display a loading message or spinner while images are loading
  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' cards-container  flex h-full relative'>
      <div className='absolute flex justify-around pt-10 flex-wrap '>
        <Card name='Python' description={pythonDescription} image={pythonImage} />
        <Card name='Django' description={djangoDescription} image={djangoImage} />
        <Card name='React' description={reactDescription} image={reactImage} />
        <Card name='MySQL' description={mysqlDescription} image={mysqlImage} />
        <Card name='Django REST Framework' description={djangoRestDescription} image={djangoRestImage} />
        <Card name='React Native' description={reactNativeDescription} image={reactImage} />
      </div>
    </div>
  );
};

export default Skills;
