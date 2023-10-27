import React, { useEffect } from 'react'
import "./Preview.scss"
import aiLogo from "../../../assets/images/ai-logo.svg"
import { useState } from 'react'
import { http } from '../../../utils/http';
import Loader from '../../../loader_file/Loader'
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import { isLoggedIn } from '../../../utils/helper';

let interval;
const Preview = () => {
    const [loaderMessage, setLoaderMessage] = useState("We're working on your site...");
    const [link, setLink] = useState("");
    const [websiteResp, setWebsiteResp] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/login")
        } else {
            if (localStorage.getItem("selectedTemp")) {
                const data = JSON.parse(localStorage.getItem("selectedTemp"))
                recursivecall(data)
            } else {
                navigate(-1)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("check", JSON.stringify(websiteResp))
    }, [websiteResp])

    const copyTemplateToServerSite = async (data) => {
        const template_name = Object.keys(JSON.parse(data?.structure))[0]
        const token = localStorage.getItem("token")
        const userId = jwt_decode(token)
        const business_title = localStorage.getItem("addcompany") ? JSON.parse(localStorage.getItem("addcompany")).company_name : {};
        const bussinessType = localStorage.getItem("TypeBusiness")
        let body = {
            template_name,
            user_id: userId?.id,
            business_type: business_title,
            business_name: bussinessType
        }
        try {
            const response = await http.post('/api/v1/ai/template-installation', body)
            if (response?.status == 200) {
                return { status: 'fulfilled' }
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    const recursivecall = async (data) => {
        const promises = [];
        // promises.push(copyTemplateToServerSite(data))
        const tempData = JSON.parse(data?.structure)
        const template_name = Object.keys(JSON.parse(data?.structure))[0]
        const temp = tempData[template_name];
        for (let i in temp) {
            let tempObj = {
                [i]: temp[i]
            }
            tempObj = escapeJSONStringify(tempObj)
            promises.push(generateTemplateSection(i, tempObj))
        }
        const results = await Promise.allSettled(promises)
        setTimeout(() => {
            gererateWebsite()
        }, 1000);
        
    }

    const generateTemplateSection = async (section_name, json_format) => {
        const { slogan, company_name, about } = JSON.parse(localStorage.getItem("addcompany"))
        let body = {
            business_tagline: slogan,
            business_title: company_name,
            prompt: about,
            section_name,
            json_format
        }
        try {
            const response = await http.post('/api/v1/ai/generate-section', body);
            if (response.status == 200) {
                const result = response.data.data;
                setWebsiteResp(prevState => ({
                    ...prevState,
                    ...result
                }));
                return { status: 'fulfilled' }
            }
        } catch (error) {
            console.log('error', error);
            return { status: 'rejected', error }
        }
    }

    function escapeJSONStringify(obj) {
        return JSON.stringify(obj, null, 2)
            .replace(/"/g, "\"")
            .replace(/\n/g, "\n")
            .replace(/\n\s+/g, "\n ");
    }

    const escapeJson = (myJSON) => {
        var myJSONString = JSON.stringify(myJSON);
        return myJSONString.replace(/\\n/g, "\\n")
            .replace(/\\'/g, "\\'")
            .replace(/\\"/g, '\\"')
            .replace(/\\&/g, "\\&")
            .replace(/\\r/g, "\\r")
            .replace(/\\t/g, "\\t")
            .replace(/\\b/g, "\\b")
            .replace(/\\f/g, "\\f")
    }

    const gererateWebsite = async () => {
        const data = JSON.parse(localStorage.getItem("selectedTemp"))
        const keys = Object.keys(JSON.parse(data?.structure))[0]
        let websiteContentJson = {
            [keys]: JSON.parse(localStorage.getItem("check"))
        }
        const token = localStorage.getItem("token")
        const bussinessType = localStorage.getItem("TypeBusiness")
        const business_title = localStorage.getItem("addcompany") ? JSON.parse(localStorage.getItem("addcompany")).company_name : {};
        const logo = localStorage.getItem("logo")
        const selectedColor = localStorage.getItem("selectedColor")
        const userId = jwt_decode(token)
        websiteContentJson = escapeJson(websiteContentJson);
        let jsonObj = {
            template_name: keys,
            user_id: userId?.id,
            json_format: websiteContentJson,
            logo: logo ? true : false,
            logo_url: logo ? logo : "",
            business_type: bussinessType,
            business_name: business_title,
            color_code: selectedColor
        }
        try {
            http.post('/api/v1/ai/update-content', jsonObj).then(res => {
                clearInterval(interval)
                if (res?.status == 200) {
                    setLink(() => res?.data?.data?.siteUrl)
                    setTimeout(() => {
                        setLoaderMessage('');
                    }, 3000)
                    return
                }
            })
        } catch (error) {
            clearInterval(interval)
            console.log("error", error)
        }
    }

    const downloadHandler = () => {
        
        const token = localStorage.getItem("token")
        const userId = jwt_decode(token)
        const data = JSON.parse(localStorage.getItem("selectedTemp"))
        const templateName = Object.keys(JSON.parse(data?.structure))[0]
        const business_title = localStorage.getItem("addcompany") ? JSON.parse(localStorage.getItem("addcompany")).company_name : {};
        let body = {
            template_name: templateName,
            user_id: userId?.id,
            business_name: business_title
        }
        try {
            setLoaderMessage("Generating your files...")
            http.post('/api/v1/ai/download-site', body).then(res => {
                if (res?.status === 200) {
                    const fileUrl = res?.data?.data?.zip
                    window.location.assign(fileUrl)
                    setLoaderMessage('');
                }
            })
        } catch (error) {
            setLoaderMessage('');
            console.log("error", error)
        }
    }

    return (
        <>
            <div className='preview_Page'>
                <div className="top-header d-flex align-items-center justify-content-between">
                    <Link to="/"><img src={aiLogo} alt="Ai Logo" /></Link>
                    <Link to="javascript:;" onClick={() => { downloadHandler() }} className='btn-style'>Download Template</Link>
                </div>
                {link && <div className="iframe-container">
                    <iframe src={link} frameborder="0"></iframe>
                </div>}
            </div>
            {loaderMessage && <Loader message={loaderMessage} />}
        </>
    )
}

export default Preview