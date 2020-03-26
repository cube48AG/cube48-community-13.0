# -*- coding: utf-8 -*-
##############################################################################
#
#
##############################################################################
{
    'name': "Cube48 Debranding",

    'summary': """
        This Module for backend and frontend debranding.""",

    'description': """
        To debrand front-end and back-end pages by removing odoo promotions, links, labels and other related stuffs.
    """,

    'author': "cube48 AG",
    'website': "https://www.cube48.de",
    'category': 'Tools',
    'version': '13.0',
    'depends': [
        'base', 'mail',
    ],
    'data': [
        'data/mail_data.xml',
        'views/views.xml',
    ],
    'qweb': ['static/src/xml/base.xml'],
    'images': ["static/description/banner.png"],
    'license': "AGPL-3",
    'installable': True,
    'application': True,
}
