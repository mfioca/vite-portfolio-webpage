import React, { useState, useEffect, useCallback, useRef  } from 'react';
import './SharedComponents.css';
import ReactMarkdown from 'react-markdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export const IntroSection = ({ title, children }) => {
    return (
        <section className="flex-column standard-padding-margin-center Intro">
            <h2 className="shadow">{ title }</h2>
            { children } 
        </section>
    );
};

export const DividerLine = ({ width = '80%' }) => {
    return <hr className="divider-line" style={{ width }} />;
};

/***********************************************************************************/
/*                              TvMaze Pagge                                       */
/***********************************************************************************/

export const BodyContainer = ({ children, className = '', hasBackground = true }) => {
    const backgroundClass = hasBackground ? 'box-background-standard' : 'box-Nobackground-standard';
    return (
        <div className={ `${backgroundClass} base-max-width standard-padding-margin-center ${className}` }>
            { children }
        </div>
    );
};

export const BorderBox = ({ children, className = '' }) => {
    return (
        <div className={`box-style-standard standard-padding ${ className }` }>
            { children }
        </div>
    );
};

/***********************************************************************************/
/*           Elements to help with CSS on smaller screens                          */
/***********************************************************************************/

export const WindowWidthDisplay = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="windowMeasurement">
            <p>{ `Window width: ${windowWidth}px` }</p>
        </div>
    );
};

export const WindowHeightDisplay = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };
  
        window.addEventListener('resize', handleResize);
  
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <div className="windowMeasurement">
            <p>{ `Window height: ${windowHeight}px` }</p>
        </div>
    );
};

/***********************************************************************************/
/*                          AI Showcase Page                                       */
/***********************************************************************************/

export const ShowcaseComponent = ({ title, titleDescription, prompt, chatData, chatDescription }) => {
    return (
        <div>
            <IntroSection title={ `${title} Prompt` }>
                { titleDescription }
            </IntroSection>
            <DividerLine />
                <BorderBox className="center-margin markdown-container">
                    <ReactMarkdown>{ prompt }</ReactMarkdown>
                </BorderBox>
            <DividerLine />
            <IntroSection title="Simulated Chat Conversation">
                { chatDescription }
            </IntroSection>
            <DividerLine />
            { chatData }    
        </div>
    );
};

export const ShowcaseComponentTabs = ({ title, titleDescription, tabs, chatData, chatDescription }) => {
    return (
        <div>
            <IntroSection title={ `${title} Prompt` }>
                { titleDescription }
            </IntroSection>
            <DividerLine />
            {/* Render Dynamic Tabs */}
            <Tabs className="standard-tabs">
                <TabList>
                    {tabs.map((tab, index) => (
                        <Tab key={ index }>{ tab.label }</Tab>
                    ))}
                </TabList>
                { tabs.map((tab, index) => (
                    <TabPanel key={ index }>
                        <BorderBox className="center-margin markdown-container">
                            { typeof tab.content === 'string' ? (
                                <ReactMarkdown>{ tab.content }</ReactMarkdown>
                            ) : (
                                tab.content
                            )}
                        </BorderBox>
                    </TabPanel>
                ))}
            </Tabs>
            <DividerLine />
            <IntroSection title="Simulated Chat Conversation">
                { chatDescription }
            </IntroSection>
            <DividerLine />
            { chatData }    
        </div>
    );
};


export const ChatBubble = ({ data }) => {
    const [title] = useState(data[0]?.title || ''); // Dynamically set title from props
    const [messages] = useState(data[0]?.messages || []); // Dynamically set messages from props
    const [visibleCount, setVisibleCount] = useState(1); // Number of messages visible initially
    const [isHovered, setIsHovered] = useState(false); // Tracks if the mouse is hovering over the chat window
    const chatWindowRef = useRef(null);

    const scrollToBottom = () => {
        const chatWindow = chatWindowRef.current;
        if (!chatWindow) return;
    
        // Use requestAnimationFrame for better compatibility
        requestAnimationFrame(() => {
            chatWindow.scrollTo({
                top: chatWindow.scrollHeight,
                behavior: 'smooth', // Smooth scrolling
            });
        });
    };

    const handleScroll = useCallback(
        (event) => {
            const chatWindow = chatWindowRef.current;
            if (!chatWindow) return;
    
            const { scrollTop, scrollHeight, clientHeight } = chatWindow;
            const isScrollingDown = event.deltaY > 0;
    
            if (isScrollingDown) {
                // Trigger "Next Message" logic only when scrolling down and at the bottom
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
    
                if (isAtBottom && visibleCount < messages.length) {
                    event.preventDefault(); // Prevent default only when scrolling down at the bottom
                    setVisibleCount((prev) => prev + 1);
                    setTimeout(() => scrollToBottom(), 0);
                }
            }
        },
        [visibleCount, messages.length]
    );
    
    useEffect(() => {
        const chatWindow = chatWindowRef.current;
        if (!chatWindow) return;
    
        const handleWheel = (event) => {
            if (isHovered) {
                handleScroll(event);
            }
        };
    
        const handleFocus = () => {
            // Reattach wheel event listener on focus
            chatWindow.addEventListener('wheel', handleWheel);
        };
    
        // Attach wheel listener
        chatWindow.addEventListener('wheel', handleWheel);
    
        // Attach focus listener to window
        window.addEventListener('focus', handleFocus);
    
        return () => {
            chatWindow.removeEventListener('wheel', handleWheel);
            window.removeEventListener('focus', handleFocus);
        };
    }, [isHovered, handleScroll]);

    const handleMouseEnter = () => {
        setIsHovered(true); // Activate hover state
        // Additional logic for activating the scroll or other behavior
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false); // Deactivate hover state
        // Additional logic for deactivating the scroll or other behavior
    };

    return (
       <div className="flex-column-center example-container">
        {/* <div className="box-background border flex-column-center example-container"> */}
            <h2>{ title }</h2>
            <div
                className="box-style-standard flex-column-center chat-window"
                ref={ chatWindowRef }
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
            >
                { messages.slice(0, visibleCount).map((msg, index) => (
                    <div
                        key={ index }
                        className={ `chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}` }
                    >
                        { msg.text.split("\n").map((line, lineIndex) => (
                            <React.Fragment key={ lineIndex }>
                                { line }
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
            <div className="center-div">
                { visibleCount < messages.length ? (
                    <button
                    className="button next-message-btn"
                    onClick={() => {
                        setVisibleCount((prev) => prev + 1); // Increment visible messages
                        setTimeout(() => scrollToBottom(), 0); // Ensure smooth scrolling
                    }}
                >
                    Next Message
                </button>
                ) : (
                    <button className="button reset-message-btn" onClick={ () => setVisibleCount(1) }>
                        Reset Chat
                    </button>
                )}
            </div>
        </div>
        
    );
};






