import { WindowControls } from "@components"
import { socials } from "@constants"
import windowWrapper from "@hoc/windowWrapper"

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="Subrata" className="w-20 rounded-full" />

        <h3>Let's Connect</h3>

        <p>Got an idea? A bug to squash? Or just wanna talk tech?
          I'm in.
        </p>
        <p>
          <a href="mailto:subratachhat777@gmail.com">subratachhat777@gmail.com</a>
        </p>


        <ul>
          {socials?.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWrapper = windowWrapper(Contact, "contact")

export default ContactWrapper