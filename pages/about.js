import React from 'react';
import styled from 'styled-components';

import {heading} from '../styles/mixins';
import {spacing} from '../styles/vars';
import A from '../components/elements/a';
import Footer from '../components/footer';
import H3 from '../components/elements/h3';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Social from '../components/socials/social';

const AboutTitle = styled.h3`
    ${heading} color: #2e2e2e;
    font-size: 2.5em;
    margin-bottom: ${spacing.large};
`;

const description =
    'Front-end engineer with experience in scalability, best practices and design. Currently inventing the future of Grocery at Hy-Vee.';

const Index = () => (
    <Page description={description} title={'Lee Robinson - About Me'}>
        <Nav />
        <Main>
            <AboutTitle>{'About Me'}</AboutTitle>
            <p>
                {`Born and raised in Iowa, I'm currently living in Des Moines and working as a Software Engineer at `}
                <A href="https://www.hy-vee.com">{'Hy-Vee.'}</A>
            </p>
            <p />
            <p>
                {'I enjoy all things technology, videography, and music. '}
                {'For a closer look at the professional work I’ve done, check out my '}
                <A href="/LeeRobinson.pdf">{'resume.'}</A>
                {' If you’re interested in reaching out to me, feel free to '}
                <A href="mailto:lrobinson2011@gmail.com">{'email me.'}</A>
            </p>
            <H3>{'Contact'}</H3>
            <Social />
            <H3>{'Travel Map'}</H3>
            <p>{' Check out the map below to see every place I’ve traveled to ✈️ '}</p>
            <iframe
                height="280"
                src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
                title="Lee's Travel Map"
                width="100%"
            />
        </Main>
        <Footer />
    </Page>
);

export default Index;