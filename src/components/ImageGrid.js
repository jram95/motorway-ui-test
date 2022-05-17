export default function ImageGrid({images}){
    return (
        <>
        <div className='container'></div>
            <div className='row text-center text-lg-start'>
                {
                    images && images.map(img => (
                    <div key={img.id} className="col-lg-3 col-md-4 col-6">
                        <img className='car-image'src={`${img.url}.jpg`} alt={img.alt_description}/>
                        <img src={`${img.user.profile_image}.webp`} alt=''/>
                    </div>
                    ))
                }
            </div>
        </>
    )
}