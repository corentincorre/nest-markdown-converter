import { Command, CommandRunner, Option } from 'nest-commander';
import { createDocument } from '../fs';

@Command({
  name: 'cli',
  options: { isDefault: true },
})
export class CliCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, string>): Promise<void> {
    if (options.filepath) {
      createDocument(options.filepath, options.fileout);
    } else {
      console.error(
        'Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir.',
      );
    }
  }
  @Option({
    flags: '-f, --filepath <filepath>',
    name: 'filepath',
    description: 'Spécifiez le fichier à convertir',
  })
  @Option({
    flags: '-o, --fileout <fileout>',
    name: 'fileout',
    description: 'Spécifiez le fichier de sortie (optionnel)',
  })
  parseShell(val: string) {
    return val;
  }
}
