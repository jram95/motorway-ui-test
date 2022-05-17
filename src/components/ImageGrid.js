export default function ImageGrid({images}){
    return (
        <>
        <div className='container'></div>
            <div className='row text-center text-lg-start'>
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