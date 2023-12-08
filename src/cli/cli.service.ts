import { Injectable } from '@nestjs/common';
import { createDocument } from '../fs';
import * as commander from 'commander';

@Injectable()
export class CliService {
    constructor() {
        this.initializeCommander();
    }

    private initializeCommander() {
        const program = new commander.Command();

        program
            .option("--filepath <valeur>", "Spécifiez le fichier à convertir")
            .option("--fileout <valeur>", "Spécifiez le fichier de sortie (optionnel)");

        program.parse(process.argv);

        const options = program.opts();

        if (options.filepath) {
            createDocument(options.filepath, options.fileout);
        } else {
            console.error(
                "Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir."
            );
        }
    }
}