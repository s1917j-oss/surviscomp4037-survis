/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'SurVis Literature Collection';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 */
var tagCloudOptions = [
    {
        field: 'keywords',
        title: 'Keywords',
        minTagFrequency: 1
    },
    {
        field: 'author',
        title: 'Authors',
        minTagFrequency: 1
    },
    {
        field: 'series',
        title: 'Series',
        minTagFrequency: 1
    }
];

/**
 * If BibTeX entries and tags should be editable
 */
var editable = true;

/**
 * Subtitle describing the paper the data is referring to
 */
var paper = {
    html: 'AI Programming Assistants Literature Collection',
    id: 'Barke2023Grounded'
};

/**
 * Extra pages like an about page
 */
var extraPages = {
    'about': 'about.html'
};

/**
 * Custom style as path to an extra css file
 */
var customStyle = '';

/**
 * Options for showing citation information
 */
var citations = null;
