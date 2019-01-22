import React, {Component} from 'react';
import { FirestoreCollection } from 'react-firestore'
import Loader from "react-loader-spinner";
import AnotherSingle from "../elements/blog/anotherSingle";
import Navbar from "../ui/navbar";

class Blog extends Component {
    render() {
        return (

            <div>
                <Navbar/>
                <div className="section section-signup">

                    <div>

                        <FirestoreCollection
                            path="blog"
                            sort="date:desc"
                            render={({ isLoading, data }) => {
                                return isLoading ? (
                                    <div className="col-md-12 text-center">
                                        <Loader
                                            type="Puff"
                                            color="black"
                                            height="100"
                                            width="100"
                                        />
                                    </div>
                                ) : (

                                    <div className="container">

                                        <div className="row justify-content-left">
                                            <div className="squares square-1"></div>
                                            <div className="squares square-2"></div>
                                            <div className="squares square-3"></div>
                                            <div className="squares square-4"></div>
                                            {
                                                data.map(post => (
                                                        <div className="col-sm-12 col-md-8 text-center" key={post.id}>

                                                            <AnotherSingle
                                                                title={post.title}
                                                                cover={post.cover}
                                                                body={post.body.substring(0, 200) + '...'}
                                                                category={post.category}
                                                                location={post.location}
                                                                date={post.date}
                                                                id={post.id}
                                                                complete={false}

                                                            />

                                                        </div>
                                                    )
                                                )
                                            }

                                        </div>
                                    </div>
                                );
                            }
                            }

                        />

                    </div>


                </div>
            </div>






        );
    }
}

export default Blog;