import React from "react";
import { Link } from "react-router-dom";
import "./CollegeInfo.scss"
const CollegeInfo = () => {

    return (
        <>
            <div>
                <div>
                    <h3>IIITDM Jabalpur Highlights 2023</h3>
                </div>
                <div>

                    <p className="College-Infotable-p">
                        Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDM Jabalpur)
                        was established in 2005. It is also known as Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing.
                        IIITDM Jabalpur was declared an Institute of National Importance under the IIIT Act.
                        National Institutional Ranking Framework (NIRF) ranked this institute 75 among engineering colleges in India.
                        IIITDM Jabalpur has introduced Smart Manufacturing as one of the BTech specialisations.
                        With Smart Manufacturing, the total count of specialisations offered by IIIT Jabalpur stands at five.
                        The admission process for all the specialisations is the same.
                    </p>
                </div>


                <div>

                    <table className="College-Infotable">
                        <tr >
                            <th className="College-Infotable-text">
                                <td className="heading-text"> Particulars</td>
                            </th>
                            <th className="College-Infotable-text">
                                <td className="heading-text">Statistics</td>
                            </th>
                        </tr>


                        <tr >
                            <td className="College-Infotable-rows">
                                Established
                            </td>
                            <td className="College-Infotable-rows">
                                2005
                            </td>
                        </tr>


                        <tr>
                            <td className="College-Infotable-rows">
                                Type
                            </td>
                            <td className="College-Infotable-rows">
                                Autonomous
                            </td>
                        </tr>

                        <tr>
                            <td className="College-Infotable-rows">
                                Recognized By
                            </td>
                            <td className="College-Infotable-rows">
                                UGC, AICTE
                            </td>
                        </tr>


                        <tr>
                            <td className="College-Infotable-rows">
                                Campus
                            </td>
                            <td className="College-Infotable-rows">
                                300 acres
                            </td >
                        </tr>


                        <tr>
                            <td className="College-Infotable-rows">
                                Official Website
                            </td>
                            <td className="College-Infotable-rows">
                                <Link to="/">https://www.iiitdmj.ac.in/</Link>
                            </td >
                        </tr>


                        <tr>
                            <td className="College-Infotable-rows">
                                Popular Courses
                            </td>
                            <td className="College-Infotable-rows">
                                BTech, MTech, BDes, MDes, PhD and Mechatronics
                            </td>
                        </tr>


                        <tr>
                            <td className="College-Infotable-rows">
                                Student Strength
                            </td>
                            <td className="College-Infotable-rows">
                                1469
                            </td>
                        </tr>

                    </table>
                </div>
            </div>


        </>
    );

};
export default CollegeInfo;