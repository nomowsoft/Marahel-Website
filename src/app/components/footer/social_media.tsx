import SocialMediaLink from "./social_media_link"

const l = [
    {
        'id': 1,
        'icon': '/footer/facebook (2).png',
        'href': 'https://www.facebook.com/masatechsa'
    },
    {
        'id': 2,
        'icon': '/footer/twitter-alt-circle (1).png',
        'href': 'https://x.com/masatechsa'
    },
    {
        'id': 3,
        'icon': '/footer/linkedin (2).png',
        'href': 'https://www.linkedin.com/company/masatechsa'
    },
]
const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center mt-5">
        {l?.map((l) => (
            <div className="mx-2 mt-2" key={l.id} >
                <SocialMediaLink  icon={l.icon} href={l.href} />
            </div>
        ))}
    </div>
  )
}

export default SocialMedia