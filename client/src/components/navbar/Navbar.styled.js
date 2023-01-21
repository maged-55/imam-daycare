import styled from 'styled-components'


export const Wrapper = styled.nav`
    position:sticky;
    border-bottom: 1px solid ;
    background-color: #6AB9A8;
    
    top:0;
    left:0;
    right:0;
    z-index:99;
    > .container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: center; 
        max-width: 1280px;
        margin: 0 auto;
        @media (max-width: 768px)
        {
            padding: 0 15px;
        }
    }

    .hamburger{
        
        @media (min-width: 768px) {
            display:none;
        }
        position: relative;
        display:block;
        z-index:1;
        user-select:none;
        appearance:none;
        border:none;
        outline:none;
        background:none;
        cursor:pointer;
        
        span{
            display:block;
            width: 33px;
            height:4px;
            border-radius: 12px;
            margin-bottom:5px;
            position:relative;
            background-color:#b96a7b;
            transform-origin: 0 0;
            transition:0.4s
        }
        &:hover span:nth-child(2){
                transform: translateX(10px);
                background-color: #b96a7b;
            }
    }

    .hamburger.is__active span:nth-child(1){
        transform: translate(0px, -2px) rotate(45deg);
    }

    .hamburger.is__active span:nth-child(2){
        transform:translateX(15px);
        opacity: 0;
    }

    .hamburger.is__active span:nth-child(3){
        transform: translate(-3px, 3px) rotate(-45deg);
    }

    .hamburger.is__active:hover span{
        background-color:#b96a7b
    }

    .nav__list_item{
        counter-increment: section 1;
        display: inline-block;
       
	
    }

    .list__container{
        @media (max-width: 769px) {
            display:none;
            
        }
    }
`;

export const LogoContainer = styled.div`
    width:200px;
    height:90px;
    display:flex;
    justify-content:center;
    align-items:center;

    // #b96a7b
`;


export const NavLink = styled.a`
    color: #b96a7b; 
    margin: 0 10px;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.2s ease-in-out;
   
    
    // here to hide number of navbar

    
    &:before{
        // content: "0" counter(section) ".";
        margin-right: 5px;
        color: #000000;
        font-size: 14px;
        text-align: right;
    }
    &:hover{
        color: #b96a7b;
    }
`;

export const MobileNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items:center;
    position:fixed;
    top:0;
    right:${({ hide }) => hide === true ? -2000 + "px" : 0 + "px"};
    transition: all 0.4s ease-in-out;
    width:100%;
    min-height:100vh;
    z-index:98;
    background-color:#2b2b2b;
    .list__lists{
        display: flex;
        flex-direction:column;
        li{
            counter-increment: section 1;
            margin:10px 0;
            a{
                font-size:32px !important;
                &:before{
                    font-size: 32px !important;
                }
            }
        }
    }
    

`;
