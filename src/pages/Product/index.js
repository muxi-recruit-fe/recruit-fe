import React, { useState} from 'react';
import './index.css';
const wpx = window.innerWidth / 375;
const hpx = window.innerHeight / 812;
function Product(props) {
    const { history } = props;
    function backToIndex() {
        history.push('/home');
    }
   
    const info = [
        {
            title: "华师匣子",
            text: `华师匣子具有查询课表、学分绩、校内地图等日常功能并且综合了校内各部门信息与学生常用网站为华师校内同学提供了很多便捷`,
            className: 'k-uni k-xz',
        },
        {
            title: '木犀课栈',
            text: `木犀课栈大家可以在其中对已学习课程进行评价并且可以根据其他同学评课意见斟酌自己的课程选择`,
            className: 'k-uni k-kz',
        },
        {
            title: '森林云相馆',
            text: `森林云相馆专为毕业生打造的云拍照平台各式各样有趣的小人形象身着具有华师特色的毕业服处华师标志景点    创造专属毕业照`,
            className: 'k-uni k-slyxg',
        },
        {
            title: '小幸运',
            text: `小幸运H5  与武理联合推出 “你的愿望   我来实现”跨校活动期待着幸运的你们实现幸运的心愿`,
            className: 'k-uni k-lucky',
        },
        {
            title: '菁程',
            text: `木犀打造的任务驱动型大学生成长平台将大学生职业愿景与企业人才需求有效连接`,
            className: 'k-uni k-qc',
        }
    ];
    const [current, setCurrnet] = useState(0);
    function turn(change) {
        let ele = document.querySelector(`.k-turnAnimation0`);
        let ele2 = document.querySelector(`.k-turnAnimation2`);
        ele.classList.toggle("move");
        ele2.classList.toggle("move");
        let temp = current + change;
        setTimeout(() => {
            if (temp < 0) {
                setCurrnet(info.length - 1);
            } else if (temp >= info.length) {
                setCurrnet(0);
            } else {
                setCurrnet(temp);
            }
        }, 50);
        // if (animation) {
        //     let temp=ele;
        //     ele=ele2;
        //     ele2=temp;
        // }
        // ele.style.transform = `scale(0)`;
        // setTimeout(() => {
        //     ele2.style.transform = `translateX(${10 * change}%)`;
        //     setTimeout(() => {
        //         ele.style.transform = '';
        //     }, 200);
        //     let temp = current + change;
        //     if (temp < 0) {
        //         setCurrnet(info.length - 1);
        //     } else if (temp >= info.length) {
        //         setCurrnet(0);
        //     } else {
        //         setCurrnet(temp);
        //     }
        // }, 0);
        // setAnimateion(!animation);
    }
    // useEffect(()=>{
    //     setInterval(()=>{
    //         turn(1);
    //     },2000);
    // },[]);
    return (<>
        <div
            className="k-uni k-bg"
            style={{
                width: 375 * wpx,
                height: 812 * hpx,
            }}
        >
            <div
                className="k-uni k-jz"
                style={{
                    width: 375 * wpx,
                    height: 812 * hpx,
                }}
            >
                <div
                    style={{
                        width: 56 * wpx,
                        maxHeight: 'min-content',
                        position: 'absolute',
                        left: 16 * wpx,
                        top: 700 * hpx,
                    }}
                    onClick={() => backToIndex()}
                >
                    <div
                        className="k-uni k-back"
                        style={{
                            width: 56 * wpx,
                            height: 56 * wpx,
                        }}
                    >

                    </div>
                    <div className="k-uni k-backText"
                    >
                        返回
                    </div>
                </div>
                <div className="k-uni k-team"
                    style={{
                        position: 'absolute',
                        width: 375 * wpx,
                        textAlign: 'center',
                        fontSize: '32px',
                        height: 375/1175*313*wpx+'px',
                        margin: '0 auto',
                        top: 118 * hpx,
                        color: '#C03B20',
                        fontWeight: 'bold',
                    }}
                >
                    {/* 团队产品 */}
            </div>
                <div
                    className="k-turnAnimation0"
                    style={{
                        position: 'absolute',
                        top: 201 * hpx,
                        width: 318 * wpx * 0.6,
                        maxHeight: 'min-content',
                        left: 193.5 * wpx - 159 * 0.6 * wpx,
                        // transform: 'translateX(-50%)',
                    }}
                >
                    <div
                        className={info[current].className}
                        style={{
                            width: 318 * wpx * 0.6,
                            height: 204 * hpx * 0.6,
                        }}
                    >
                    </div>
                    <div
                        className="k-title"
                    >
                        {info[current].title}
                    </div>
                    <div
                        className="k-info"
                    >
                        {info[current].text}
                    </div>

                </div>
                <div
                    className="k-turnAnimation2"
                    style={{
                        position: 'absolute',
                        top: 201 * hpx,
                        width: 318 * wpx * 0.6,
                        maxHeight: 'min-content',
                        left: 193.5 * wpx - 159 * 0.6 * wpx,
                        // transform: 'translateX(-50%)',
                    }}
                >
                    <div
                        className={info[current].className}
                        style={{
                            width: 318 * wpx * 0.6,
                            height: 204 * hpx * 0.6,
                        }}
                    >
                    </div>
                    <div
                        className="k-title"
                    >
                        {info[current].title}
                    </div>
                    <div
                        className="info-w"
                    >
                        {info[current].text}
                    </div>

                </div>
                <div className="k-nextBox"
                    style={{
                        display: 'flex',
                        bottom: 146 * hpx,
                        left: 193.5 * wpx,
                        justifyContent: 'space-between',
                    }}
                >
                    <div className="k-turnText"
                        onClick={() => turn(-1)}
                    >
                        prev
                        </div>
                    <div className="k-turnText"
                        onClick={() => turn(1)}
                    >
                        next
                        </div>
                </div>
            </div>
        </div>
    </>);
}
export default Product;