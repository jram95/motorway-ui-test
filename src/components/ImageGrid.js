export default function ImageGrid({images}){
    return (
        <>
        <div className='container'></div>
            <div className='row text-center text-lg-start'>
                {
                    images && images.map(img => (
                    <div key={img.id} className="col-lg-3 col-md-4 col-6" style={{padding:'20px'}}>
                        <div className="img-post">
                            <img className='car-image'src={`${img.url}.jpg`} alt={img.alt_description}/>
                            <div className="overlay">
                      <div className='text'>
                        {`Likes: ${img.likes}`}
                      </div>
                    </div>
                            <div>
                                Added by {img.user.name}
                                <br/>
                                <img className="user-image" src={`${img.user.profile_image}.webp`} alt='avatar of user who uploaded car image'/>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    )
}