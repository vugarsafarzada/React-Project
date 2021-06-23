import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h2>{this.props.info.title}</h2>
                <hr/>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut consequuntur cumque distinctio
                    dolores ex inventore magnam nihil quia quos. A ex minus nemo quos reprehenderit saepe sint vel voluptatum.
                    Accusamus accusantium ad animi blanditiis cum cumque dignissimos dolorum ducimus est eum exercitationem
                    expedita hic illum ipsam laudantium magni molestias neque nobis omnis perspiciatis praesentium quae sed
                    temporibus vel, veniam. Consequuntur corporis delectus deleniti distinctio dolor doloremque ea earum enim,
                    id inventore laboriosam laudantium nemo nostrum odit pariatur perferendis perspiciatis, porro
                    quasi quos repellat sapiente similique tempore vel, vero vitae. Ad corporis esse nesciunt perspiciatis
                    quam temporibus ullam veniam veritatis!
                </article>
            </div>
        );
    }
}

export default Main;