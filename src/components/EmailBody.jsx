import flaticonWelcomeImage from '../assets/images/flaticon-Welcome-Image.png';

function EmailBody () {
    return (
        <section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>
    )
}

export default EmailBody;