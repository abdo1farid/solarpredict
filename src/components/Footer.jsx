import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/'
  }
];


const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 max-w-[12ch]">
                        Your Energy, Our Vision.
                    </h2>

                    <ButtonPrimary href="mailto:biotechpark.greenconnect@gmail.com" label="Mail Us" icon="chevron_right"/>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:px-20">
                    <div>
                        <p className="mb-2">Sitemap</p>
                        <ul>
                            {sitemap.map(({ label,href }, key) =>(
                                <li key={key}>
                                    <a href={href} className="block text-sm text-green-400 py-1 transition-all hover:text-green-200">
                                        {label}
                                        </a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map(({ label,href }, key) =>(
                                <li key={key}>
                                    <a href={href} target="_blank" className="block text-sm text-green-400 py-1 transition-all hover:text-green-200">
                                        {label}
                                        </a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <p className="text-green-200 text-sm">
                    &copy; 2025 <span className="text-green-50">SolarPredict</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
