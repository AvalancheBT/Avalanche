/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, maxlen: 80, indent: 4 */
/*globals
    window: false,
    Mustache: false,
    Backbone: false,
    $: false,
    R: false,
    Slog: false,
    _: false,
    Store: false
*/
/*
 * This is a simple script binder, to throw all that we need into $
 *
 * Avalanche Project (http://avalanche-bt.com)
 *
 * @requires Backbone
 * @requires Mustache
 * @requires jQuery
 * @requires Slog
 * @requires R
 *
 * This code is licensed under the GPL3, or
 * "GNU GENERAL PUBLIC LICENSE Version 3"
 * For more details, see http://opensource.org/licenses/gpl-3.0.html
 *
 * @author Keith Cirkel ('keithamus') <avalanche@keithcirkel.co.uk>
 * @license http://opensource.org/licenses/gpl-3.0.html
 * @copyright Copyright © 2011, Keith Cirkel
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var Templates = {}, Models = {}, Views = {}, Controllers = {};

//Library shortcuts
$.view  = Backbone.View;
$.model = Backbone.Model;
$.collection = Backbone.Collection;
$.controller = Backbone.Controller;
$.localSync = Backbone.localSync;
$.localStore = Store;
$.R = R;
$.u = _;
$.tmpl  = $.u.template;

$.u.templateSettings = {
    evaluate: /\{#([\s\S]+?)#\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g
};

// Torrent Sync Engines
$.torrentSync = {
    RtorrentXMLRPC: Backbone.torrentSyncRtorrentXMLRPC
};

//Slog wrappers
$.log   = (Slog ? Slog.log : function () {});
$.warn  = (Slog ? Slog.warn : function () {});
$.error = (Slog ? Slog.error : function () {});
$.info  = (Slog ? Slog.info : function () {});
$.debug = (Slog ? Slog.debug : function () {});

$(document).ready(function InistialiseAvalanche() {
    $.info('Initialising Avalanche');
    window.App = new Controllers.Application();
    Backbone.history.start();
});