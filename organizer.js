* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #222;
}


/* Sidebar */

.sidebar {
    position: fixed;

    width: 240px;
    height: 100vh;

    background: #1769aa;
    color: white;

    padding: 30px 20px;
}


.logo {
    font-size: 30px;
    font-weight: bold;
}


.role {
    margin-top: 8px;
    margin-bottom: 35px;

    opacity: 0.8;
}


.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}


.sidebar nav a {
    text-decoration: none;
    color: white;

    padding: 12px;

    border-radius: 6px;
}


.sidebar nav a:hover {
    background: rgba(255, 255, 255, 0.15);
}


.logout-btn {
    position: absolute;

    bottom: 30px;
    left: 20px;

    width: 200px;

    padding: 11px;

    border: none;
    border-radius: 6px;

    background: white;
    color: #1769aa;

    font-weight: bold;

    cursor: pointer;
}


/* Main */

.main-content {
    margin-left: 240px;

    padding: 30px 40px;
}


/* Header */

.top-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 35px;
}


.top-header h1 {
    margin-bottom: 5px;
}


.top-header p {
    color: #777;
}


.user-info {
    background: white;

    padding: 12px 18px;

    border-radius: 8px;

    font-weight: bold;
}


/* Sections */

section {
    margin-bottom: 35px;
}


section h2 {
    margin-bottom: 20px;
}


/* Statistics */

.stats {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.stat-card {
    background: white;

    padding: 25px;

    border-radius: 10px;

    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.06);
}


.stat-card h3 {
    color: #777;

    font-size: 15px;

    margin-bottom: 10px;
}


.stat-card p {
    font-size: 30px;

    font-weight: bold;

    color: #1769aa;
}


/* Card */

.card {
    background: white;

    padding: 30px;

    border-radius: 10px;

    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.06);
}


.section-description {
    color: #777;

    margin-bottom: 25px;
}


/* Form */

.form-group {
    margin-bottom: 20px;

    flex: 1;
}


.form-group label {
    display: block;

    font-weight: bold;

    margin-bottom: 8px;
}


input,
select {
    width: 100%;

    padding: 12px;

    border: 1px solid #ccc;

    border-radius: 6px;

    font-size: 15px;
}


input:focus,
select:focus {
    outline: none;

    border-color: #1769aa;
}


.form-row {
    display: flex;

    gap: 20px;
}


/* Resources */

.resources {
    margin: 25px 0;
}


.resources h3 {
    margin-bottom: 15px;
}


.resources label {
    display: inline-block;

    margin-right: 25px;
    margin-bottom: 12px;

    font-size: 14px;
}


.resources input {
    width: auto;

    margin-right: 6px;
}


/* Button */

.primary-btn {
    background: #1769aa;

    color: white;

    border: none;

    padding: 13px 22px;

    border-radius: 6px;

    font-size: 15px;

    font-weight: bold;

    cursor: pointer;
}


.primary-btn:hover {
    background: #125589;
}


/* Result */

.result-card {
    border-left: 5px solid #1769aa;
}


.result-success {
    color: #16803c;
}


.result-warning {
    color: #c27803;
}


.result-danger {