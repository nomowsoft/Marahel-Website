import SocialMediaLink from "./social_media_link"

const l = [
    {
        'id': 1,
        'icon': '/murshed/tweeter.png',
        'href': '#'
    },
    {
        'id': 2,
        'icon': '/murshed/facebook.png',
        'href': '#'
    },
    {
        'id': 3,
        'icon': '/murshed/linkedin.png',
        'href': '#'
    },
]
const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center">
        {l?.map((l) => (
            <div className="mx-2" key={l.id} >
                <SocialMediaLink  icon={l.icon} href={l.href} />
            </div>
        ))}
    </div>
  )
}

export default SocialMedia