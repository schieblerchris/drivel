import Posts from "#/ui/posts";
import {NewPost} from "#/ui/new_post";

export default function Page() {
    return (
        <div className="row">
            <div className="col pt-3 align-top bg-light rounded-3">
                <NewPost/>
            </div>
            <div className="col-lg-6 col-lg-8 pt-3 align-top bg-light rounded-3">
                <Posts/>
            </div>
        </div>
    )
}