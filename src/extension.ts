'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let baseUrl = 'https://docs.masoniteproject.com/';

    let masoniteDocs = vscode.commands.registerCommand('extension.masoniteDocs', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + '' + '/' + ''));
    });
    context.subscriptions.push(masoniteDocs);
    let masoniteDocsServiceContainer = vscode.commands.registerCommand('extension.masoniteDocsServiceContainer', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'architecture' + '/' + 'service-container'));
    });
    context.subscriptions.push(masoniteDocsServiceContainer);
    let masoniteDocsServiceProviders = vscode.commands.registerCommand('extension.masoniteDocsServiceProviders', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'architecture' + '/' + 'service-providers'));
    });
    context.subscriptions.push(masoniteDocsServiceProviders);
    let masoniteDocsApi = vscode.commands.registerCommand('extension.masoniteDocsApi', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'api'));
    });
    context.subscriptions.push(masoniteDocsApi);
    let masoniteDocsAuthentication = vscode.commands.registerCommand('extension.masoniteDocsAuthentication', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'authentication'));
    });
    context.subscriptions.push(masoniteDocsAuthentication);
    let masoniteDocsAuthorization = vscode.commands.registerCommand('extension.masoniteDocsAuthorization', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'authorization'));
    });
    context.subscriptions.push(masoniteDocsAuthorization);
    let masoniteDocsBroadcasting = vscode.commands.registerCommand('extension.masoniteDocsBroadcasting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'broadcasting'));
    });
    context.subscriptions.push(masoniteDocsBroadcasting);
    let masoniteDocsCache = vscode.commands.registerCommand('extension.masoniteDocsCache', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'cache'));
    });
    context.subscriptions.push(masoniteDocsCache);
    let masoniteDocsCommands = vscode.commands.registerCommand('extension.masoniteDocsCommands', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'commands'));
    });
    context.subscriptions.push(masoniteDocsCommands);
    let masoniteDocsCompilingAssets = vscode.commands.registerCommand('extension.masoniteDocsCompilingAssets', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'compiling-assets'));
    });
    context.subscriptions.push(masoniteDocsCompilingAssets);
    let masoniteDocsCsrf = vscode.commands.registerCommand('extension.masoniteDocsCsrf', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'csrf'));
    });
    context.subscriptions.push(masoniteDocsCsrf);
    let masoniteDocsEvents = vscode.commands.registerCommand('extension.masoniteDocsEvents', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'events'));
    });
    context.subscriptions.push(masoniteDocsEvents);
    let masoniteDocsExceptions = vscode.commands.registerCommand('extension.masoniteDocsExceptions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'exceptions'));
    });
    context.subscriptions.push(masoniteDocsExceptions);
    let masoniteDocsFacades = vscode.commands.registerCommand('extension.masoniteDocsFacades', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'facades'));
    });
    context.subscriptions.push(masoniteDocsFacades);
    let masoniteDocsHashing = vscode.commands.registerCommand('extension.masoniteDocsHashing', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'hashing'));
    });
    context.subscriptions.push(masoniteDocsHashing);
    let masoniteDocsHelpers = vscode.commands.registerCommand('extension.masoniteDocsHelpers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'helpers'));
    });
    context.subscriptions.push(masoniteDocsHelpers);
    let masoniteDocsMail = vscode.commands.registerCommand('extension.masoniteDocsMail', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'mail'));
    });
    context.subscriptions.push(masoniteDocsMail);
    let masoniteDocsNotifications = vscode.commands.registerCommand('extension.masoniteDocsNotifications', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'notifications'));
    });
    context.subscriptions.push(masoniteDocsNotifications);
    let masoniteDocsPackageDevelopment = vscode.commands.registerCommand('extension.masoniteDocsPackageDevelopment', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'package-development'));
    });
    context.subscriptions.push(masoniteDocsPackageDevelopment);
    let masoniteDocsQueues = vscode.commands.registerCommand('extension.masoniteDocsQueues', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'queues'));
    });
    context.subscriptions.push(masoniteDocsQueues);
    let masoniteDocsScheduling = vscode.commands.registerCommand('extension.masoniteDocsScheduling', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'scheduling'));
    });
    context.subscriptions.push(masoniteDocsScheduling);
    let masoniteDocsSessions = vscode.commands.registerCommand('extension.masoniteDocsSessions', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'sessions'));
    });
    context.subscriptions.push(masoniteDocsSessions);
    let masoniteDocsTinker = vscode.commands.registerCommand('extension.masoniteDocsTinker', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'tinker'));
    });
    context.subscriptions.push(masoniteDocsTinker);
    let masoniteDocsUploading = vscode.commands.registerCommand('extension.masoniteDocsUploading', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'uploading'));
    });
    context.subscriptions.push(masoniteDocsUploading);
    let masoniteDocsValidation = vscode.commands.registerCommand('extension.masoniteDocsValidation', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'features' + '/' + 'validation'));
    });
    context.subscriptions.push(masoniteDocsValidation);
    let masoniteDocsMasoniteDebugbar = vscode.commands.registerCommand('extension.masoniteDocsMasoniteDebugbar', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'official-packages' + '/' + 'masonite-debugbar'));
    });
    context.subscriptions.push(masoniteDocsMasoniteDebugbar);
    let masoniteDocsContributingGuide = vscode.commands.registerCommand('extension.masoniteDocsContributingGuide', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'prologue' + '/' + 'contributing-guide'));
    });
    context.subscriptions.push(masoniteDocsContributingGuide);
    let masoniteDocsCreateABlog = vscode.commands.registerCommand('extension.masoniteDocsCreateABlog', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'prologue' + '/' + 'create-a-blog'));
    });
    context.subscriptions.push(masoniteDocsCreateABlog);
    let masoniteDocsHowToContribute = vscode.commands.registerCommand('extension.masoniteDocsHowToContribute', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'prologue' + '/' + 'how-to-contribute'));
    });
    context.subscriptions.push(masoniteDocsHowToContribute);
    let masoniteDocsReleaseCycle = vscode.commands.registerCommand('extension.masoniteDocsReleaseCycle', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'prologue' + '/' + 'release-cycle'));
    });
    context.subscriptions.push(masoniteDocsReleaseCycle);
    let masoniteDocsCors = vscode.commands.registerCommand('extension.masoniteDocsCors', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'security' + '/' + 'cors'));
    });
    context.subscriptions.push(masoniteDocsCors);
    let masoniteDocsCommandsTests = vscode.commands.registerCommand('extension.masoniteDocsCommandsTests', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'commands-tests'));
    });
    context.subscriptions.push(masoniteDocsCommandsTests);
    let masoniteDocsConsoleTests = vscode.commands.registerCommand('extension.masoniteDocsConsoleTests', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'console-tests'));
    });
    context.subscriptions.push(masoniteDocsConsoleTests);
    let masoniteDocsDatabaseTests = vscode.commands.registerCommand('extension.masoniteDocsDatabaseTests', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'database-tests'));
    });
    context.subscriptions.push(masoniteDocsDatabaseTests);
    let masoniteDocsExtending = vscode.commands.registerCommand('extension.masoniteDocsExtending', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'extending'));
    });
    context.subscriptions.push(masoniteDocsExtending);
    let masoniteDocsGettingStarted = vscode.commands.registerCommand('extension.masoniteDocsGettingStarted', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'getting-started'));
    });
    context.subscriptions.push(masoniteDocsGettingStarted);
    let masoniteDocsHttpTests = vscode.commands.registerCommand('extension.masoniteDocsHttpTests', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'http-tests'));
    });
    context.subscriptions.push(masoniteDocsHttpTests);
    let masoniteDocsMocking = vscode.commands.registerCommand('extension.masoniteDocsMocking', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'testing' + '/' + 'mocking'));
    });
    context.subscriptions.push(masoniteDocsMocking);
    let masoniteDocsControllers = vscode.commands.registerCommand('extension.masoniteDocsControllers', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'controllers'));
    });
    context.subscriptions.push(masoniteDocsControllers);
    let masoniteDocsEnvironments = vscode.commands.registerCommand('extension.masoniteDocsEnvironments', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'environments'));
    });
    context.subscriptions.push(masoniteDocsEnvironments);
    let masoniteDocsMiddleware = vscode.commands.registerCommand('extension.masoniteDocsMiddleware', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'middleware'));
    });
    context.subscriptions.push(masoniteDocsMiddleware);
    let masoniteDocsRequest = vscode.commands.registerCommand('extension.masoniteDocsRequest', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'request'));
    });
    context.subscriptions.push(masoniteDocsRequest);
    let masoniteDocsResponse = vscode.commands.registerCommand('extension.masoniteDocsResponse', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'response'));
    });
    context.subscriptions.push(masoniteDocsResponse);
    let masoniteDocsRouting = vscode.commands.registerCommand('extension.masoniteDocsRouting', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'routing'));
    });
    context.subscriptions.push(masoniteDocsRouting);
    let masoniteDocsStaticFiles = vscode.commands.registerCommand('extension.masoniteDocsStaticFiles', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'static-files'));
    });
    context.subscriptions.push(masoniteDocsStaticFiles);
    let masoniteDocsViews = vscode.commands.registerCommand('extension.masoniteDocsViews', () => {
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(baseUrl + 'the-basics' + '/' + 'views'));
    });
    context.subscriptions.push(masoniteDocsViews);

}