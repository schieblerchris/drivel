export function NewPost() {

    return (
        <>
            <img src="flaticon_freepik_rostrum.png" className="medium-logo"/>
            @SomeUser
            <div className="input-group pt-2 mb-5">
                    <textarea className="form-control" aria-label="With textarea"
                              placeholder="What has to be said?"></textarea>
                <span className="input-group-text"><i className="bi bi-send"></i></span>
            </div>
        </>
    )

}