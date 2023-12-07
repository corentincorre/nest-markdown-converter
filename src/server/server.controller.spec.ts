import { Test, TestingModule } from '@nestjs/testing';
import * as assert from 'assert';
import { ServerController } from './server.controller';

describe('Server Controller', () => {
  let controller: ServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      imports: [],
    }).compile();

    controller = app.get<ServerController>(ServerController);
  });

  describe('generate', () => {
    it('should generate documentation', () => {
      const testData = '/*DOC This is a test comment */';
      controller.generate(testData);
    });
  });

  describe('getAll', () => {
    it('should return "Hello world"', () => {
      const result = controller.getHello();
      assert.strictEqual(result, 'Hello world');
    });
  });
});
