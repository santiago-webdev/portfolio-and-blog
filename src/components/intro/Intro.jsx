import './intro.css'
import Me from '../../img/mauricio-macri.jpg'

const Intro = () => {
    return (
        <>
            <div className='i'>
                <div className='i-left'>
                    <div className='i-left-wrapper'>
                        <h2 className='i-intro'>
                            <span className='hello'>Hello!</span> My name is
                        </h2>
                        <h1 className='i-name'>Santiago Gonzalez</h1>
                        <div className='i-title'>
                            <div className='i-title-wrapper'>
                                <div className='i-title-item'>
                                    Frontend Developer
                                </div>
                                <div className='i-title-item'>
                                    Backend Developer
                                </div>
                            </div>
                        </div>
                        <p className='i-desc'>
                            I'm interested in <strong>FOSS</strong>,
                            <strong> Unix</strong> and computers, looking for my
                            first job in the IT world. You can view my resume
                            and few of my projects below
                        </p>
                    </div>
                </div>
                <div className='i-right'>
                    <div className='i-card bg'></div>
                    <div className='i-card'>
                        <a
                            href='https://www.linkedin.com/in/santiago-gonzalez-62557221b'
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            <img
                                src={Me}
                                alt='change this Macri'
                                className='i-img'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
