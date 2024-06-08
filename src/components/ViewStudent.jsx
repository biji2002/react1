import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {

    const [data, changeData] = useState(
        [
            { "name": "anu", "admNo": "101", "rollNo": 11 },
            { "name": "minu", "admNo": "102", "rollNo": 12 },
            { "name": "dinu", "admNo": "103", "rollNo": 13 }

        ]
    )

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            {data.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div className="card">
                                    <img src="https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1717632000&semt=sph" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">name :{value.name}</p>
                                    </div>

                                </div>

                            </div>
                            }
                            )}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent