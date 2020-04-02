import {Avatar , Divider} from 'antd'
import "../style/components/Author.css"
import {QqCircleFilled , TwitterCircleFilled , AlipaySquareFilled} from '@ant-design/icons'
const Author = ()=>{
    return(
        <div className="author-div comm-box">
            <div><Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"/></div>
            <div className='author-introduction'>
                    专注于WEB和移动前端开发
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<AlipaySquareFilled />} className="account"></Avatar>
                <Avatar size={28} icon={<TwitterCircleFilled />} className="account"></Avatar>
                <Avatar size={28} icon={<QqCircleFilled />} className="account"></Avatar>
            </div>
        </div>
    )
}
export default Author