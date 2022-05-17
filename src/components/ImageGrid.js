export default function ImageGrid({images}){
    return (
        <>
            <div className='app'>
                {
                    images && images.map(img => (
                    <div key={img.id} >
                        <img src={`${img.url}.jpg`} alt=''/>
                        <img src={`${img.user.profile_image}.webp`} alt=''/>
                    </div>
                    ))
                }
            </div>
        </>
    )
}