import './CreateCoursBody.scss';

import React from 'react';

const CreateCoursBody = () => {
    return (
        <div>
            <div className="bloc1">
                <h1>CREEZ VOTRE COURS</h1>
                <p>Aliquam ut efficitur lorem. Aliquam ornare libero a ullamcorper efficitur.
                    Vivamus quis dui a enim ornare convallis in iaculis dolor.
                    Nulla facilisi. In semper tincidunt cursus.
                    In efficitur tortor lorem, vitae tristique libero aliquet eu.
                    Nam ullamcorper interdum ornare. </p>
            </div>
            <form className="courscreate">
                <div className="titleandsubject">
                    <label for="title">TITRE</label>&emsp;
                    <input type="text" id="title" name="title_cours"></input>
                    <p>Indication sur quoi mettre dans l'input</p>
                    <div className="sujetandss">
                        <select name="subjects">
                            <option value="sujet">SUJET</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JAVASCRIPT</option>
                            <option value="python">PYTHON</option>
                            <option value="ruby">RUBY</option>
                        </select>&emsp;
                        <label for="sous_sujet">SOUS-SUJET</label>&emsp;
                        <input type="text" id="soussujet" name="subject_name"></input>
                    </div>
                </div>

                <div className="blocmessageIDE">
                    <textarea id="msg" name="user_message" placeholder="Introduction"></textarea>
                    <p>ICI SERA PLACé notre éditeur de code</p>
                </div>

                <div className="button">
                    <p><button type="submit">Créer votre cours</button></p>
                </div>
            </form >

        </div >
    );
};

export default CreateCoursBody;