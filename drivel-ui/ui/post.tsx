import {IPost} from "#/lib/post_types";
import {FormattedDate} from "#/ui/formattedDate";

export default function Post({user, message, date, starCount}: IPost) {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="flaticon_freepik_rostrum.png" className="medium-logo" alt="Profile"/>
                        </div>
                        <div className="col-10">
                            <h5 className="card-title">{user}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><FormattedDate date={date}/></h6>
                        </div>
                    </div>
                </div>
                <p className="card-text">{message}</p>
                <i className="bi bi-star"></i>{starCount}
            </div>
        </div>
    )
}